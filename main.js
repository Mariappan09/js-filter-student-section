		myArr = [

		{

		studenName: "jack",

		studenClass: 6,

		studenSection: "a"

		},

		{

		studenName: "tom",

		studenClass: 6,

		studenSection: "a"

		},

		{

		studenName: "ricky",

		studenClass: 6,

		studenSection: "b"

		},{

		studenName: "john",

		studenClass: 6,

		studenSection: "b"

		},{

		studenName: "jerry",

		studenClass: 6,

		studenSection: "a"

		},{

		studenName: "henry",

		studenClass: 6,

		studenSection: "b"

		},{

		studenName: "stephen",

		studenClass: 6,

		studenSection: "a"

		}

		]
		   var emp=myArr.filter(function(b)
		   {
			   return b.studentSection=="a";
		   });
		   console.log(emp);