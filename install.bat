@echo off
title ncrpyt installer
echo @echo off > run.bat
echo title ncrpyt tool by JustAnother-Programmer >> run.bat
echo cd src >> run.bat
echo cmd /k node main.js listcmds >> run.bat
echo @echo on >> run.bat
cd src
npm install
@echo on