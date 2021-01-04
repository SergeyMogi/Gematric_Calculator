
    function buttonClicked(){
	//משתנה הסוכם לתוכו את הסכום של המספרים הגימטרים 
        var conunt = 0;
		//משתנה מסוג מחרוזת הקולט לתוכו את הערך שהכנסו בתוך התא בטופס הקודם
        var string= document.getElementById("text").value;
        for(var i=0; i<string.length;i++){
            if(string[i].match(/[\u0590-\u05FF]/)){
               var x = getnumber(string[i]);
			   //סכימה מתבצעת
               conunt += x; 
            }
            
        }
		//בדיקה האם האותיות שהכנסת תקינות
		//מתייחס לשלושה מצבים
		//האם לא הוכנסו נתונים
        if(string.length==0)
            document.getElementById("gimatria").innerHTML = "לא הכנסו נתונים";
		//האם האותיות הם באנגלית
        else if(conunt == 0)
            document.getElementById("gimatria").innerHTML = "אמרנו בעיברית לא?";
		//במידה ולא נמצאו שגיאות 
		//הכנסה של הסכימה של המספרים הגימטריים של האותיות שהוכנסו בעיברית
        else 
            document.getElementById("gimatria").innerHTML = conunt;
    }
        
		//פונקציה המכילה בתוכה רשימה של אותיות
		//כל תא ברשימה מהווה אות ובתוך תא הזיכרון נמצא ערך קבוע
		//ההערך הקבוע הוא הערך הגימטרי של האות 
    function getnumber(char){
        var letters = [];
        letters['א'] = 1
        letters['ב'] = 2
        letters['ג'] = 3
        letters['ד'] = 4
        letters['ה'] = 5
        letters['ו'] = 6
        letters['ז'] = 7
        letters['ח'] = 8
        letters['ט'] = 9
        letters['י'] = 10
        letters['כ'] = 20
        letters['ך'] = 20
        letters['ל'] = 30
        letters['מ'] = 40
        letters['ם'] = 40
        letters['נ'] = 50
        letters['ן'] = 50
        letters['ס'] = 60
        letters['ע'] = 70
        letters['פ'] = 80
        letters['ף'] = 80
        letters['צ'] = 90
        letters['ץ'] = 90
        letters['ק'] = 100
        letters['ר'] = 200
        letters['ש'] = 300
        letters['ת'] = 400
		//החזרה של האות 
        return letters[char];
    }