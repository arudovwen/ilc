<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="theme-color" content="#006600" />

        <title>Imo Learning Centre</title>

        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        {{-- <link rel="stylesheet" href="https://unpkg.com/@popperjs/core@2"> --}} 
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
        <link  href="{{asset('css/app.css')}}" type="text/css" rel="stylesheet">
        <link rel="shortcut icon" href="/images/logo.jpg" type="image/x-icon">
        
     
    </head>
    <body>
       <div id="app">
        <router-view></router-view>
       </div>

       <script  src="{{asset('js/manifest.js')}}"  defer></script> 
       <script  src="{{asset('js/vendor.js')}}" defer></script>
       <script  src="{{asset('js/app.js')}}" defer> </script>
      <script src="https://kit.fontawesome.com/51185f46ed.js" defer></script>
    </body>
</html>
