class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s_sorted = s.split('').sort();
        let t_sorted = t.split('').sort();
        
        if(s.length !== t.length) return false;

        let flag = true;

        for(let i=0 ; i<s.length ; i++){
            if(s_sorted[i]!=t_sorted[i]){
                flag = false;
                break;
            }
        }

        return flag;
    }
}
