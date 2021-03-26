@echo off
echo @echo off > run.bat
echo cd src >> run.bat
echo cmd /k node main.js listcmds >> run.bat
echo @echo on >> run.bat
cd src
npm install
@echo on