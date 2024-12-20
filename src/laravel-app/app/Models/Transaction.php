<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transactions';
    protected $primaryKey = 'id';
    protected $fillable = [
        'transactor_id',
        'location_id',
        'total_pricing',
        'check_content',
    ];
    public $incrementing = true;
    public $timestamps = true;

    protected $casts = [
        'total_pricing' => 'float',
    ];

    public function transactor()
    {
        return $this->hasOne(User::class, 'id', 'transactor_id');
    }
    public function location()
    {
        return $this->hasOne(Location::class, 'id', 'location_id');
    }
    public function bought_products()
    {
        return $this->hasMany(BoughtProduct::class, 'transaction_id', 'id');
    }
}
