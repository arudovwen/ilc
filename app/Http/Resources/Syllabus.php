<?php

namespace App\Http\Resources;

use App\Tutor;
// use App\Syllabus;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Curriculum;

class Syllabus extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            'syllabus'=>  Syllabus::where('school_id', $this->school_id)->where('myclass', $this->level)->where('subject', $resource->subject)->first(),
             'content'=>$this->content,
             'excerpt'=>$this->excerpt,
             'tutor'=>Tutor::find($this->tutor_id),
            'curriculum'=>Curriculum::where('school_id', $this->school_id)->where('myclass', $this->level)->first(),
        ];
    }
}
