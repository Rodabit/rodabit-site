@echo off
title Planejamento de Aulas 2026 - SEDUC RS
color 0A

echo ==================================================================
echo    Planejamento de Aulas 2026 - Matriz SEDUC RS - Prof. Givanildo
echo ==================================================================
echo.

python --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Python nao encontrado!
    echo Instale o Python 3.8 ou superior.
    echo Download: https://www.python.org/downloads/
    pause
    exit /b 1
)

if not exist "server.py" (
    echo ERRO: Arquivo server.py nao encontrado!
    pause
    exit /b 1
)

echo Iniciando servidor Python...
timeout /t 3 /nobreak >nul
echo Varrendo a sala...
timeout /t 2 /nobreak >nul
echo Expulsando as baratas...
timeout /t 2 /nobreak >nul
start /b python server.py > server_log.txt 2>&1

timeout /t 3 /nobreak >nul

echo Abrindo navegador...
start http://localhost:8000/planejamento.html

echo.
echo Servidor em execucao!
echo Acesse: http://localhost:8000/planejamento.html
echo.
echo Feche esta janela para encerrar o servidor.
echo.

pause