app.filter("gender",function()
{
	return function (gender)
	{
		switch(gender)
		{
			case 1: return "male";
			case 2: return "female";
			case 1: return "transgender";
		}
	}
})