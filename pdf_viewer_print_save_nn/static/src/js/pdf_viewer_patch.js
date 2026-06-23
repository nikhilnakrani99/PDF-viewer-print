/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { useService } from "@web/core/utils/hooks";
import { PdfViewerField } from "@web/views/fields/pdf_viewer/pdf_viewer_field";
import { hidePDFJSButtons } from "@web/core/utils/pdfjs";
import { onWillUpdateProps, useEffect, useRef, useState } from "@odoo/owl";

patch(PdfViewerField.prototype, {
    setup() {
        // Call the original setup method to ensure core functionality remains intact
        super.setup();

        this.notification = useService("notification");
        this.action = useService("action");
        this.state = useState({
            isValid: true,
            objectUrl: "",
        });

        this.iframeViewerPdfRef = useRef("iframeViewerPdf");

        onWillUpdateProps((nextProps) => {
            if (nextProps.readonly) {
                this.state.objectUrl = "";
            }
        });

        useEffect(
            (el) => {
                if (el) {
                    // Set to false to show the buttons
                    hidePDFJSButtons(this.iframeViewerPdfRef.el, {
                        hideDownload: false,
                        hidePrint: false,
                    });
                }
            },
            () => [this.iframeViewerPdfRef.el]
        );
    }
});