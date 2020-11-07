function calElectricityBill()
{
	let unit = Number(document.getElementById('txtunit').value);
	let amount;
	
	if(unit==" ")
	{
		alert("Please Enter the Units !");
	}
	else if(unit<0)
	{
		alert("Invalid Unit !!!");
	}
	else if(unit>0 && unit<=30)
	{
		amount=unit*7.85;
	}
	else if(unit>30 && unit<=60)
	{
		amount=30*7.85+(unit-30)*7.85;
	}
	else if(unit>60 && unit<=90)
	{
		amount=30*7.85+30*7.85+(unit-60)*10;
	}
	else if(unit>90 && unit<=120)
	{
		amount=30*7.85+30*7.85+30*10+(unit-90)*27.75;
	}
	else
	{
		amount=30*7.85+30*7.85+30*10+30*27.75+(unit-120)*32+480;
	}
	
	let txtResult = document.getElementById('YourBill');
	txtResult.innerHTML = "Your Electricity Bill is Rs : "+amount;

}