# ncrpyt
A simple encryption program which utilises AES256.

This is not extremely secure and is not intended for actual encryption use (I may update this to use envrionment variables at some point for more security)

# How do I use it?

- Step 1: Download the code
- Step 2: Open a command prompt and cd into the project root and run `npm install`
- Step 3: In the command prompt use the commands provided below in this format `node src/main.js COMMAND --FLAG` to use the program.
- Step 4: Change the default key using the command below.
- Step 5: Anything you encrypt or decrypt will be put into the console and also the 2 text files in the `out` folder

# Available commands:
- encrypt with flag --text="text2encrypt"
- decrypt with flag --text="text2decypt"
- getKey (no flag needed)
- setKey with flag --key="newKeyToSet"

### Thanks to all the people who made the packages I used!
