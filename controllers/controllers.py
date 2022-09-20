# -*- coding: utf-8 -*-
# from odoo import http


# class Webcam(http.Controller):
#     @http.route('/webcam/webcam', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/webcam/webcam/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('webcam.listing', {
#             'root': '/webcam/webcam',
#             'objects': http.request.env['webcam.webcam'].search([]),
#         })

#     @http.route('/webcam/webcam/objects/<model("webcam.webcam"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('webcam.object', {
#             'object': obj
#         })
