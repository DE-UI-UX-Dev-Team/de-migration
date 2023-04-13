import { BannerAlert } from 'banner-alert-js/banner-alert.js';
window.triggerAlertsFullWidth = function() {
    let messageType = 'message'; // Can be any value
    let message     = `<div class="row"> 
                            <div class="alert-msg col--lg-12">
                              <h4 class="alert-head">This is an alert headline</h4> 
                              <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span>
                            </div>
                       </div>`;
    let messageTtl  = 100000; // Measured in seconds
    let parentContainer = document.querySelector( '.full-width-dismissable-banner-alerts' ); // This container can be anywhere in the document
    let customClassList = [ 'alert-container','bg--info-background' ];


    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	

    messageType = 'error'; // Can be any value
    message     = `<div class="row"> 
                        <div class="alert-msg col--lg-12">
                            <h4 class="alert-head">This is error alert headline</h4> 
                            <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span>
                        </div>
                    </div>`;
    customClassList = [ 'alert-container','bg--error-background' ];

    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	

    messageType = 'warning'; // Can be any value
    message     = `<div class="row"> 
                        <div class="alert-msg col--lg-12">
                            <h4 class="alert-head">This is warning alert headline</h4> 
                            <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span>
                        </div>
                    </div>`;
    customClassList = [ 'alert-container','bg--warning-background' ];

    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	

    messageType = 'success'; // Can be any value
    message     = `<div class="row"> 
                        <div class="alert-msg col--lg-12">
                            <h4 class="alert-head">This is success alert headline</h4> 
                            <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span>
                        </div>
                    </div>`;
    customClassList = [ 'alert-container','bg--success-background' ];

    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	
}

window.triggerAlerts = function() {
    let messageType = 'message'; // Can be any value
    let message     = `<div class="row"> 
                            <div class="alert-msg col--lg-12">
                              <h4 class="alert-head">This is an alert headline</h4> 
                              <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span>
                            </div>
                       </div>`;
    let messageTtl  = 100000; // Measured in seconds
    let parentContainer = document.querySelector( '.banner-alerts' ); // This container can be anywhere in the document
    let customClassList = [ 'alert-container', 'bg--info-background' ];


    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	

    messageType = 'error'; // Can be any value
    message     = `<div class="row"> 
                        <div class="alert-msg col--lg-12">
                            <h4 class="alert-head">This is error alert headline</h4> 
                            <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span>
                        </div>
                    </div>`;
    customClassList = [ 'alert-container','bg--error-background' ];

    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	

    messageType = 'warning'; // Can be any value
    message     = `<div class="row"> 
                        <div class="alert-msg col--lg-12">
                            <h4 class="alert-head">This is warning alert headline</h4> 
                            <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span>
                        </div>
                    </div>`;
    customClassList = [ 'alert-container','bg--warning-background' ];

    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	

    messageType = 'success'; // Can be any value
    message     = `<div class="row"> 
                        <div class="alert-msg col--lg-12">
                            <h4 class="alert-head">This is success alert headline</h4> 
                            <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span>
                        </div>
                    </div>`;
    customClassList = [ 'alert-container','bg--success-background' ];

    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	
}

window.triggerAlertsWithButton = function() {
    let messageType = 'message'; // Can be any value
    let message     = `<div class="row"> 
                            <div class="alert-msg col--lg-9">
                              <h4 class="alert-head">This is an alert headline</h4> 
                              <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span>
                            </div>
                            <div class="alert-cta col--lg-3">
                                <button class="btn" href="#">sample Text</button>
                            </div>
                       </div>`;
    let messageTtl  = 100000; // Measured in seconds
    let parentContainer = document.querySelector( '.cta-banner-alerts' ); // This container can be anywhere in the document
    let customClassList = [ 'alert-container', 'bg--info-background' ];


    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	

    messageType = 'error'; // Can be any value
    message     = `<div class="row"> 
                            <div class="alert-msg col--lg-9">
                              <h4 class="alert-head">This is error alert headline</h4> 
                              <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span></div>
                            <div class="alert-cta col--lg-3">
                                <button class="btn" href="#">sample Text</button>
                            </div>
                       </div>`;
    customClassList = [ 'alert-container','bg--error-background' ];


    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	

    messageType = 'warning'; // Can be any value
    message     = `<div class="row"> 
                            <div class="alert-msg col--lg-9">
                              <h4 class="alert-head">This is warning alert headline</h4> 
                              <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span></div>
                            <div class="alert-cta col--lg-3">
                                <button class="btn" href="#">sample Text</button>
                            </div>
                       </div>`;
    customClassList = [ 'alert-container','bg--warning-background' ];


    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	

    messageType = 'message'; // Can be any value
    message     = `<div class="row"> 
                            <div class="alert-msg col--lg-9">
                              <h4 class="alert-head">This is success alert headline</h4> 
                              <span class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl </span></div>
                            <div class="alert-cta col--lg-3">
                                <button class="btn" href="#">sample Text</button>
                            </div>
                       </div>`;
    customClassList = [ 'alert-container','bg--success-background' ];

    BannerAlert.transmit( 
        messageType, 
        message, 
        parentContainer, 
        messageTtl, 
        customClassList
    );	
}
      
 