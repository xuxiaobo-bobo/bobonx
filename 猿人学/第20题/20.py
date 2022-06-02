import pywasm


def ws_parse():
    ws=pywasm.load('./wasm.wasm')

    print(ws)
ws_parse()