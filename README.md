# ncrpyt
A simple encryption program which utilises AES256.

This is not extremely secure and is not intended for actual encryption use (I may update this to use envrionment variables at some point for more security)

# How do I use it?

- Step 1: Download the code

- Step 2: Run install.bat(Skip this if you have already done this)

- Step 3: run the run.bat(Generated by install.bat)

- Step 4: Change the default key using the command below.
- ```node main.js setKey --key="mynewkey"```

- Step 5: Anything you encrypt or decrypt will be put into the console and also the 2 text files in the `out` folder

# Available commands:
- encrypt with flag --text="text2encrypt"
- decrypt with flag --text="text2decrypt"
- setkey with flag --key="newKeyToSet"
- setdefaultkeykey with flag --key="newKeyToSet"
- resetkey (no flag needed)
- getkey (no flag needed)
- wipe (no flag needed)
- listcmds (no flag needed)

# Example Usage:
```node main.js setkey --key="mykey"```


```node main.js setdefaultkey --key="mykey"```


```node main.js resetkey```


```node main.js getkey```


```node main.js encrypt --text="mytext"```


```node main.js decrypt --text="encryptedText"```


```node main.js wipe```

```node main.js listcmds```

# Contributors:

@JustAnother-Programmer - Application


@StonksSelected - Some application code and Batchfiles

### Thanks to all the people who made the packages we used!
