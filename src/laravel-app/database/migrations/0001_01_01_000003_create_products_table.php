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
            $table->unsignedBigInteger('attachments_id')->nullable();
            $table->foreign('attachments_id')
                ->references('id')
                ->on('attachment_groups');

            $table->enum('product_type', ['Unlisted', 'Cat', 'Accessory', 'Food', 'Furniture']);
            $table->string('display_name');
            $table->text('description');
            $table->float('pricing');
            $table->float('discount_pricing')->nullable();
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
