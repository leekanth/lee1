///<reference path="script12.js" />

demo.filter("gender",function()
{
	return function (gender)
	{
		switch(gender)
		{
			case 1: return "male";
			case 2: return "female";
			case 3: return "not mentioned";
		}
	}
});