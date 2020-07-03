

var filterWord = {
      word:'not',

       remove: function(str){
          str=str.replace(this.word, "")
              return str;
          }
}

Array.prototype.bubbleSort_algo = function()
{
    var is_sorted = false;
    while (!is_sorted)
    {
        is_sorted = true;
        for (var n = 0; n < this.length - 1; n++)
        {
            if (this[n] > this[n+1]){
                var x = this[n+1];
                this[n+1] = this[n];
                this[n] = x;
                is_sorted = false;
            }
        }
    }
    return JSON.stringify(this);
};

console.log([6,4,0, 3,-2,1].bubbleSort_algo());