<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Product;

class TestSeeder extends Seeder
{
    /**
     * Add some products, cat_breeds, cats to the database.
     * Run the seeder by using `php artisan db:seed --class=TestSeeder --force`
     */
    public function run(): void
    {

        Product::create([
            'product_type' => 'FURNITURE',
            'display_name' => 'Cat Hammock Bed',
            'description' => 'Hanging bed for cats to relax and enjoy their nap time.',
            'pricing' => 45.00,
            'discount_pricing' => null,
            'stock' => 12,
        ]);
        Product::create([
            'product_type' => 'CATS',
            'display_name' => 'Asteroid Destroyer',
            'description' => 'This kitten was found abandoned in the sewers of Seattle, Washington, D.C.',
            'pricing' => 1200.00,
            'discount_pricing' => 69.99,
            'stock' => 1,
        ]);
        Product::create([
             "product_type" => "FOOD",
            "display_name" => "Kaķu utilizators",
            "description" => "Pēc šī kaķis nebūs izsalcis ļoooooti ilgi..",
            "pricing" => 0.01,
            "discount_pricing" => null,
            "stock" => 9999999,
        ]);

        Product::create([
            "product_type" => "FURNITURE",
            "display_name" => "Cat Scratching Post",
            "description" => "Durable scratching post for cats to keep their claws healthy.",
            "pricing" => 29.99,
            "discount_pricing" => null,
            "stock" => 5,
        ]);
        Product::create([
            "product_type" => "TOYS",
            "display_name" => "Catnip Mouse Toy",
            "description" => "Soft, plush mouse toy filled with premium catnip.",
            "pricing" => 5.99,
            "discount_pricing" => null,
            "stock" => 6836,
        ]);
        Product::create([
            "product_type" => "FOOD",
            "display_name" => "Automatic Cat Feeder",
            "description" => "Programmable feeder for portion-controlled meals.",
            "pricing" => 89.99,
            "discount_pricing" => null,
            "stock" => 4220,
        ]);
        Product::create([
            "product_type" => "FURNITURE",
            "display_name" => "Cat Hammock Bed",
            "description" => "Hanging bed for cats to relax and enjoy their nap time.",
            "pricing" => 45.99,
            "discount_pricing" => null,
            "stock" => 1485,
        ]);
        Product::create([
            "product_type" => "FURNITURE",
            "display_name" => "Self-Cleaning Litter Box",
            "description" => "Automatic litter box that cleans itself after each use.",
            "pricing" => 159.99,
            "discount_pricing" => null,
            "stock" => 4580,
        ]);
        Product::create([
            "product_type" => "FURNITURE",
            "display_name" => "Cat Window Perch",
            "description" => "Comfortable window-mounted seat for cats to watch the outside world.",
            "pricing" => 35.99,
            "discount_pricing" => null,
            "stock" => 7187,
        ]);
        Product::create([
            "product_type" => "FOOD",
            "display_name" => "Cat Water Fountain",
            "description" => "Flowing water fountain to encourage hydration.",
            "pricing" => 25.99,
            "discount_pricing" => null,
            "stock" => 550,
        ]);
        Product::create([
            "product_type" => "TOYS",
            "display_name" => "Laser Pointer Toy",
            "description" => "Interactive laser pointer to keep cats entertained.",
            "pricing" => 12.99,
            "discount_pricing" => null,
            "stock" => 4359,
        ]);
        Product::create([
            "product_type" => "FURNITURE",
            "display_name" => "Cat Carrier Bag",
            "description" => "Comfortable, lightweight carrier for transporting your cat.",
            "pricing" => 49.99,
            "discount_pricing" => null,
            "stock" => 6774,
        ]);
        Product::create([
            "product_type" => "FURNITURE",
            "display_name" => "Cat Grooming Glove",
            "description" => "Silicone grooming glove to gently remove loose fur while petting.",
            "pricing" => 15.99,
            "discount_pricing" => null,
            "stock" => 8001,
        ]);
        Product::create([
            "product_type" => "FURNITURE",
            "display_name" => "Cat Tree with Hideaway",
            "description" => "Multi-level cat tree with hideaway spots and scratching posts.",
            "pricing" => 110.99,
            "discount_pricing" => null,
            "stock" => 914,
        ]);
        Product::create([
            "product_type" => "TOYS",
            "display_name" => "Organic Catnip",
            "description" => "100% organic, high-quality catnip for playtime.",
            "pricing" => 7.99,
            "discount_pricing" => null,
            "stock" => 7620,
        ]);

        DB::table('cat_breeds')->insert([
            [
                'id' => 1,
                'display_name' => 'Munchkin',
                'feeding_info' => 'Munchkins should be fed high-quality cat food that provides balanced nutrition. They enjoy both wet and dry food, with a focus on protein-rich ingredients.',
                'personality_info' => 'Munchkins are known for their playful and outgoing nature. They are friendly, sociable, and tend to get along well with children and other pets.',
                'environment_info' => 'They thrive in indoor environments but appreciate having safe outdoor access if possible. They enjoy interactive toys and need space to play and explore.',
                'tips_info' => 'Regular playtime is essential to keep them stimulated. Provide scratching posts and climbing structures to satisfy their natural instincts.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'display_name' => 'Maine Coon',
                'feeding_info' => 'Maine Coons require a diet rich in protein and fat to support their large size. High-quality dry food and occasional wet food will keep them healthy.',
                'personality_info' => 'They are gentle giants, known for their affectionate and playful demeanor. Maine Coons are intelligent and can be trained to follow commands.',
                'environment_info' => 'These cats adapt well to various living situations but prefer a home where they have space to roam. They enjoy being around people and can be quite social.',
                'tips_info' => 'Regular grooming is necessary to prevent matting in their long fur. Ensure they have plenty of toys to engage their curiosity.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 3,
                'display_name' => 'Bengal',
                'feeding_info' => 'Bengals benefit from a high-protein diet that mimics their wild ancestors. Look for grain-free options and high-quality meat-based foods.',
                'personality_info' => 'Bengals are energetic, playful, and highly intelligent. They are known for their love of climbing and exploring, often requiring a lot of stimulation.',
                'environment_info' => 'They thrive in active households where they have opportunities to play and explore. Providing vertical spaces and interactive toys is essential.',
                'tips_info' => 'Invest in durable toys as they tend to be rough players. Spend time engaging with them daily to keep their energy levels in check.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 4,
                'display_name' => 'Siamese',
                'feeding_info' => 'Siamese cats thrive on a balanced diet that includes both wet and dry food. Make sure the food is rich in protein and low in fillers.',
                'personality_info' => 'Siamese are vocal and social cats that enjoy interacting with their human companions. They are affectionate and can form strong bonds with their owners.',
                'environment_info' => 'They do well in households where they are not left alone for long periods. Siamese cats appreciate companionship, whether from humans or other pets.',
                'tips_info' => 'Provide mental stimulation through toys and puzzles. Regular social interaction is important to keep them happy and engaged.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        DB::table('cats')->insert([
            [
                'id' => 2,
                'breed_id' => 1,
                'birthdate' => '2021-09-11',
                'color' => 'Black and White',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        User::create([
            'email' => 'admin@murratava.lv',
            'password' => Hash::make('safe123'),
            'display_name' => 'Admin',
            'name' => 'Admin',
            'surname' => 'Admin',
            'phone_number' => '+37125565817',
            'user_role' => 'Admin',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        User::create([
            'email' => 'vardsuzvards@gmail.com',
            'password' => Hash::make('asd'),
            'display_name' => 'Vards Uzvards',
            'name' => 'Vards',
            'surname' => 'Uzvards',
            'phone_number' => '+37125565816',
            'user_role' => 'User',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('reviews')->insert([
            [
                'id' => 1,
                'reviewer_id' => 2,
                'product_id' => 1,
                'content' => 'Wow very good bed for me, my cat doesn\'t like it though..',
                'rating' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        DB::table('card_information')->insert([
            [
                'cardholder_id' => 2,
                'card_number' => Crypt::encryptString('5550130966726224'),
                'expiration_date' => Crypt::encryptString('12/24'),
                'cvc_number' => Crypt::encryptString('271'),
                'card_name' => 'RYAN GOSLING',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        DB::table('locations')->insert([
            [
                'id' => 1,
                'creator_id' => 2,
                'city' => 'Washington',
                'street' => '2608 84th Street Ct S',
                'apartment_number' => null,
                'zip_code' => '98499',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        DB::table('transactions')->insert([
            [
                'id' => 1,
                'transactor_id' => 2,
                'location_id' => 1,
                'total_pricing' => 45.00,
                'check_content' => '1x CAT HAMMOCK BED\t45.00 EUR\n------------------------------\nTOTAL:\t45.00 EUR\n\nTHANK YOU FOR SHOPPING AT MURRĀTAVA!',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        DB::table('bought_products')->insert([
            [
                'product_id' => 1,
                'transaction_id' => 1,
                'display_name' => 'Cat Hammock Bed',
                'amount' => 2,
                'price_per_product' => 45.00,
                'total_price' => 90.00,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        // DB::table('selected_products')->insert([
        //     [
        //         'id' => 1,
        //         'user_id' => 2,
        //         'product_id' => 1,
        //         'amount' => 3,
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //     ],
        //     [
        //         'id' => 2,
        //         'user_id' => 2,
        //         'product_id' => 2,
        //         'amount' => 1,
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //     ],
        // ]);
    }
}
