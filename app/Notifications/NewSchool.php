<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewSchool extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public $school;
    public $admin;
    public function __construct($school, $admin)
    {
        $this->school = $school;
        $this->admin = $admin;
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
        ->subject('Welcome ')             
        ->from($this->school->email, 'Imo Learning Center')
        ->greeting('Hello, ')                 
        ->line('This email contains all the account information you need to get started.')
        ->line('Admin portal : https://isl-center.herokuapp.com/admin')
        ->line('Student portal : https://isl-center.herokuapp.com/student')
        ->line('Tutor portal : https://isl-center.herokuapp.com/tutor')
        ->line('--LOGIN DETAILS--')
        ->line('Email :'. $this->admin->email)
        ->line('Password :'. $this->admin->pass)     
        ->action('Click to begin setup', url('/admin'))
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
