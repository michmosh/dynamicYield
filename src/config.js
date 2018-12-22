const Config = {
    appName:'You Tube' ,
    credetials : {
        clientId : '914923358822-8llj66k8cdjftpahkbqtspi7tv09bie2.apps.googleusercontent.com',
        clentSecret : '9IF-7OnI2i19f9S1g_TZ9pFb',
        apiKey :'AIzaSyB4Jg1oek2v_TI0UCOkYUgKUU0HW-_eVxE' ,
        apiUrl : 'https://www.googleapis.com/youtube/v3',
    },
    storageObject : 'savedPlaylist',
    navLinks : [
        {name:'Link 1' , icon:'fa fa-headphones' , path:'#'} ,
        {name:'Link 2' , icon:'fa fa-list-ul' , path:'#'} ,
        {name:'Link 3' , icon:'fa fa-search' , path:'#'} ,
        {name:'Link 4' , icon:'fa fa-heart' , path:'#'}
    ]
}

export default Config;
export const storageObject = Config.storageObject;

