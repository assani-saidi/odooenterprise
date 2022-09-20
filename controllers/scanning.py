import json
from odoo import http
from odoo.http import Response
import json
from .scanner import detect_barcode


# class ScanningController(http.Controller):
#     @http.route('/scan', type='http', auth='public', methods=['POST'], website=True, csrf=False)
#     def scan(self, **kwargs):
#         frame = kwargs.get("frame")
#         print("____________________________ frame ______________________")
#         print(frame)
#         print("____________________________ frame ______________________")
#         # resp = detect_barcode(frame)
#         # print(resp)
#
#         # return Response(json.dumps(resp), status=200, mimetype='application/json')
#
#         return Response(json.dumps({"frame": frame}), status=200, mimetype='application/json')