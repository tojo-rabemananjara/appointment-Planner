
const Utils = {
    getTodayStringPersonal() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        
        if (dd < 10) {
           dd = '0' + dd;
        }
        
        if (mm < 10) {
           mm = '0' + mm;
        } 
      
        today = yyyy + '-' + mm + '-' + dd;

        //dd-mm-yyyy
        return today;
    },

    getTodayString() {
        const [month, day, year] = new Date()
          .toLocaleDateString("en-US")
          .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }

}

export default Utils;