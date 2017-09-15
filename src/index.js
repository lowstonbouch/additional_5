module.exports = function check(str, bracketsConfig) {
    var answer = 0;
    var pos = 0;
    var length = str.length;
    var arr = [0];
    arr.splice(0,1);
    console.log(bracketsConfig.length);
        for(var y = 0; y <length; y++) {
            for (var x = 0; x < bracketsConfig.length; x++) {

                if (str[y] == bracketsConfig[x][1] && arr[answer-1] == bracketsConfig[x][0]) {
                    arr.splice(answer - 1,1);
                    answer--;
                    pos --;
                    break;
                }
                if (str[y] == bracketsConfig[x][0]) {
                    arr.splice(answer , 0, bracketsConfig[x][0]);
                    answer++;
                    pos++;
                    break;
                }
                if(str[y] == bracketsConfig[x][1] && arr.length == 0)
                {
                    pos--;
                    console.log("Yes");
                    return false;
                }


            }
        }
    console.log(answer);
    console.log(arr);

  if(pos == 0) return true;
    if(pos != 0) return false;


  // your solution
}
