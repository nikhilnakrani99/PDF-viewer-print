# -*- coding: utf-8 -*-
# Part of Odoo Module Developed by Nikhil Nakrani.
# See LICENSE file for full copyright and licensing details.

{
    'name': 'Show PDF Viewer Buttons',
    'version': '19.0',
    'category': 'Hidden',
    'summary': 'Restores Download and Print buttons in the PDF Viewer',
    'description': """
        This module patches the PdfViewerField component in Odoo 19 to set 
        hideDownload: false and hidePrint: false.
    """,
    'author': 'Nikhil Nakrani',
    'depends': ['base', 'web'],
    'assets': {
        'web.assets_backend': [
            'pdf_viewer_print_save_nn/static/src/js/pdf_viewer_patch.js',
        ],
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
