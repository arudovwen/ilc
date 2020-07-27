<?php

namespace App\Http\Resources;

use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

class AssessmentResultResource extends JsonResource
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
            'id'=> $this->id,
         'level'=> $this->level,
        'record' => $this->subject,
        'school_id'=> $this->school_id,
        'subject'=> $this->subject,
        'title'=> $this->title,
        'total_score'=> $this->total_score,
        'type'=>$this->type,
        'user'=> User::find($this->user_id)

        ];
    }
}
