<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewTutor extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public $school;
    public $tutor;
    public function __construct($school,$tutor)
    {
        $this->school = $school;
        $this->tutor = $tutor;
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
                    ->subject('Welcome Aboard')
                    ->from($this->school->email, $this->school->schools)
                    ->greeting('Welcome to '. $this->school->schools)                 
                    ->line('This email contains all the account information you need to get started.')
                    ->line('Tutor portal : https://isl-center.herokuapp.com/tutor')
                    ->line('Email :'. $this->tutor->email)
                    ->line('Password :'. $this->tutor->pass)
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
