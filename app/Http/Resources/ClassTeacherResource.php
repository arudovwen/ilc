<?php

namespace App\Http\Resources;

use App\Tutor;
use App\Classes;
use Illuminate\Http\Resources\Json\JsonResource;

class ClassTeacherResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'class' => Classes::where('id', $this->class_id)->first(),
            'tutor' =>Tutor::where('id',  $this->tutor_id)->first()
        ];
    }
}
