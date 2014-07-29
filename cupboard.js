var Cupboard = function()
{
	if (typeof(Storage) == 'undefined')
	{
		console.log('This browser does not support localStorage')
	}

	this.set = function(key, value)
	{
		localStorage.setItem(key, value)

		return this
	}

	this.get = function(key)
	{
		if (localStorage.getItem(key))
		{
			return localStorage.getItem(key)
		}
		else
		{
			return undefined
		}
	}

	this.delete = function(key)
	{
		localStorage.removeItem(key)

		return this
	}
}