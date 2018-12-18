var rem={
    removearr:function(arr,a){
        var newarr=[];
        for(var i=0;i<arr.length;i++){
            if(i==a){
                continue;
            }
            newarr.push(arr[i]);
        }
        return newarr;
    }
}
module.exports=rem;