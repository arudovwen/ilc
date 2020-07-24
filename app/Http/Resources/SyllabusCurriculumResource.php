<?php

namespace App\Http\Resources;

use App\Tutor;
use App\Syllabus;
use App\Curriculum;
use Illuminate\Http\Resources\Json\JsonResource;

class SyllabusCurriculumResource extends JsonResource
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
             'id'=> $this->id,
            'syllabus'=>  Syllabus::where('school_id', $this->school_id)->where('myclass', $this->level)->where('subject', $this->subject)->first(),
             'content'=>$this->content,
             'title'=>$this->module,
                'subject'=>$this->subject,             
             'excerpt'=>$this->excerpt,
             'time'=>$this->created_at,
             'tutor'=>Tutor::find($this->tutor_id),
            'curriculum'=>Curriculum::where('school_id', $this->school_id)->where('subject', $this->level)->first(),
        ];;
    }
}
