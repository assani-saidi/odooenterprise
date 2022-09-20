# -*- coding: utf-8 -*-
{
    'name': "webcam",

    'summary': """
        this is a web-camera point of sale scanner""",

    'description': """
        This allows mobile devices to emulate a barcode scanner using
        the camera on the device.
    """,

    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Productivity',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'point_of_sale'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/point_of_sale.assets_common.xml'
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'assets': {
        'web.assets_qweb': [
            "webcam/static/src/xml/scanner.xml"
        ],
        # 'web.assets_common': [
        #     'webcam/static/src/js/html5-qrcode.min.js',
        # ],
    }
}
