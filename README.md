# ncrpyt
A simple encryption program which utilises AES256.

This is not extremely secure and is not intended for actual encryption use (I may update this to use envrionment variables at some point for more security)

# How do I use it?

- Step 1: Download the code

- Step 2: Run install.bat in src (Skip this if you have already done this)

- Step 3: run the run.bat in src

- Step 4: Change the default key using the command below.
- ```node src/main.js setKey --key="mynewkey"```

- Step 5: Anything you encrypt or decrypt will be put into the console and also the 2 text files in the `out` folder

# Available commands:
- encrypt with flag --text="text2encrypt"
- decrypt with flag --text="text2decrypt"
- getKey (no flag needed)
- setKey with flag --key="newKeyToSet"

# Example Usage:
```node main.js setKey --key="mykey"```


```node main.js getKey```


```node main.js encrypt --text="mytext"```


```node main.js decrypt --text="encryptedText"```

# Contributors:

@JustAnother-Programmer - Application
@StonksSelected - Some application code and Batchfiles

### Thanks to all the people who made the packages I used!
