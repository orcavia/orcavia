@echo off
setlocal
cd /d "%~dp0"
set "npm_config_cache=%CD%\.npm-cache"

echo Installing dependencies if needed...
call npm.cmd install
if errorlevel 1 goto :error

echo Starting Docusaurus dev server at http://127.0.0.1:3000
call npm.cmd run start -- --host 127.0.0.1 --port 3000
goto :eof

:error
echo.
echo Dev server failed. Check the message above.
pause
exit /b 1
