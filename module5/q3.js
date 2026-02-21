function mySetInterval(callback,delay)
{
    let timerId=null;
    
    setTimeout(()=>{
        callback();
    },1000)
}