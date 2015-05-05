My game engine needed a way of storing data for high scores and such so I threw this together.

## Classes

```
Pantry() // For temporary session data  
```

```
Cellar() // For across-session persistent data
```

## Functions
*All functions work in both Pantry() and Cellar()*

```
save(key, value) // Saves a value and pairs it with a key for retrieval later  
```

```
get(key) // Gets the data linked to a specified key  
```

```
delete(key) // Delete data linked to the given key and then delete the key  
```

```
clear() // Clear all storage entries (be careful)  
```
