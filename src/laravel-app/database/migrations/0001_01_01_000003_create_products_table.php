<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Migration for the products table.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->enum('product_type', ['UNLISTED', 'CATS', 'ACCESSORIES', 'FOOD', 'CARE', 'TOYS', 'FURNITURE']);
            $table->string('display_name');
            $table->text('description');
            $table->float('pricing', precision: 2);
            $table->float('discount_pricing',precision: 2)->nullable();
            $table->string('stripe_product_id')->nullable();
            $table->string('price_id')->nullable();
            $table->unsignedInteger('stock');
            $table->timestamps();
        });
    }

    /**
     * Reversing migration creation.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
