@echo off
title SisPlan - Servidor de Teste
color 0E

echo ============================================================
echo    SISPLAN - SERVIDOR DE TESTE
echo ============================================================
echo.

REM Verifica Python
python --version > nul 2>&1
if errorlevel 1 (
    echo ❌ Python nao encontrado!
    echo.
    echo    Certifique-se de que o Python esta instalado
    echo    Baixe em: https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

echo ✅ Python encontrado!
python --version
echo.

REM Verifica Flask
python -c "import flask" > nul 2>&1
if errorlevel 1 (
    echo ⚠️  Flask nao encontrado. Instalando...
    pip install flask
    echo.
)

echo ✅ Flask OK
echo.

REM Inicia servidor
echo 🚀 Iniciando servidor...
echo.

start /min python server.py

timeout /t 3 /nobreak > nul

echo.
echo ============================================================
echo    SERVIDOR EM EXECUCAO!
echo ============================================================
echo.
echo    🌐 http://localhost:5000
echo    📊 http://localhost:5000/teste_visualizador.html
echo.
echo    Pressione qualquer tecla para ENCERRAR
echo ============================================================
echo.

start http://localhost:5000/teste_visualizador.html

pause > nul

echo.
echo Encerrando servidor...
taskkill /f /im python.exe > nul 2>&1
echo ✅ Servidor encerrado!
echo.

pause