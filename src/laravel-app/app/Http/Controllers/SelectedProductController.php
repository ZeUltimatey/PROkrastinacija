<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SelectedProducts;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\SelectedProductRequest;
use App\Http\Resources\SelectedProductResource;
use Laravel\Sanctum\Http\Controllers\AuthenticatedSessionController;
use App\Http\Resources\ProductResource;
use App\Http\Controllers\Route;

class SelectedProductController extends Controller
{
    public function get_basket()
    {
        // Get the authenticated user
        $user = Auth::user();
        $selectedProducts = SelectedProducts::where('user_id', $user->id)->get();

        $message = [];
        foreach ($selectedProducts as $selectedProduct) {
            $product = Product::find($selectedProduct->product_id);
            if ($product->stock == 0) {
                $selectedProduct->delete();
                // message for the user that the product was deleted from his basket
                $message[] = "Produkts: {$product->display_name} tika dzēsts no jūsu groza, dēļ preces nepieejamības noliktavā.";
            } elseif ($selectedProduct->amount > $product->stock) {
                $selectedProduct->update(['amount' => $product->stock]);
                // message for the user that the amount of the product was changed in his basket
                $message[] = "Produkta: {$product->display_name} izvelētais skaits tika nomainīts uz {$product->stock} noliktavā pieejamā preces daudzuma dēļ.";
            }
        }

        //return SelectedProductResource::collection(SelectedProducts::all()->where('user_id', $user->id));
        return response()->json(['message' => $message, 'data' => SelectedProductResource::collection($selectedProducts)]);
    }
    public function addToBasket(SelectedProductRequest $request)
    {

        // Get the authenticated user
        $user = Auth::user();
        $request->merge(['user_id' => $user->id]);

        // Validate request data
        $validated =  $request->validated();

        // Add product to basket
        // Check if the product is already in the basket
        $existingSelectedProduct = SelectedProducts::where('product_id', $request->product_id)->where('user_id', $user->id)->first();
        if ($existingSelectedProduct) {
            $product = Product::find($request->product_id);
            if ($request->amount > $product->stock) {
                return response()->json(['error' => "Izvēlētā produkta daudzums pārsniedz noliktavā pieejamo, lūdzu norādiet pieejamu daudzumu!"], 422);
            }
            if ($validated['amount'] >= 1) { // if product amount is more than 1 update it to the new amount
                $existingSelectedProduct->update($validated);
                return $this->get_basket();
            } else { // if product amount is less than 1 or null add one product
                $validated['amount'] = $existingSelectedProduct->amount + 1;
                $existingSelectedProduct->update($validated);
               return $this->get_basket();
            }
        }

        // if the product doesn't exist in the basket add it
        $basketProduct = SelectedProducts::create($request->merge(['amount' => $request->amount ?? 1])->all());

        // returns all the users basket products
        return $this->get_basket();
    }


    public function clear_basket()
    {
        // Get the authenticated user
        $user = Auth::user();
        SelectedProducts::where('user_id', $user->id)->delete();
        return response()->json("Basket cleared", 202); // Request accepted
    }


    public function removeFromBasket(int $product_id)
    {
        $user = Auth::user();
        // Delete selected product for the user
        $removedBasketProduct = SelectedProducts::where('user_id', $user->id)->where('product_id', $product_id)->delete();

        return response()->json($removedBasketProduct, 204);
    }


    public function clear_basket_after_payment()
    {

        // Get the authenticated user
        $user = Auth::user();
        dd($user);
        $basketProducts = SelectedProducts::where('user_id', $user->id)->get();
        foreach ($basketProducts as $basketProduct) {
            $basketProduct->product->stock -= $basketProduct->amount;
            $basketProduct->product->save(); //TODO add this to transaction history before deleting
            $basketProduct->delete();
        }
       // SelectedProducts::where('user_id', $user->id)->delete();
        return redirect()->to(env('FRONTEND_URL')); ; // Request accepted
    }
}
