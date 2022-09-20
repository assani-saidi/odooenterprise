odoo.define('point_of_sale.ScanView', function(require) {
    'use strict';

    const { Component } = owl;
    const { xml } = owl.tags;
    const Registries = require('point_of_sale.Registries');

    class ScanView extends Component {

        setup() {
            super.setup();
        }
    }

    ScanView.template = xml`
    <div class="loader">
        <div class="loading">
            <video id="video" />
        </div>
    </div>`;

    Registries.Component.add(ScanView);

    return ScanView;
});