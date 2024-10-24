<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SelectedProducts extends Model
{
    protected $table = 'selected_products';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'product_id',
        'amount',
    ];
    public $incrementing = false;
    public $timestamps = true;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function product()    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
}
