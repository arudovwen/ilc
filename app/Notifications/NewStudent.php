<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewStudent extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public $student;
    public $school;
    public function __construct($school, $student)
    {
        $this->school = $school;
        $this->student = $student;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                ->subject('Welcome Student')             
                ->from($this->school->email, $this->school->schools)
                ->greeting('Welcome to '. $this->school->schools)                 
                ->line('This email contains all the account information you need to get started.')
                ->line('Student portal : https://isl-center.herokuapp.com/student')              
                ->line('LOGIN DETAILS')
                ->line('Email :'. $this->student->email)
                ->line('Password :'. $this->student->pass)
                ->line('You can find your school details in your profile page')
                ->action('Log in already', url('/auth'))
                ->line('We welcome you once again');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
