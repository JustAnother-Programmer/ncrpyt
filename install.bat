@echo off
title ncrpyt installer
(
  echo @echo off
  echo title ncrpyt tool by JustAnother-Programmer
  echo cd src
  echo cmd /k node main.js listcmds
  echo @echo on
) > run.bat
cd src
npm install
@echo on