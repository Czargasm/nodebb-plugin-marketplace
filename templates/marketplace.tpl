<div class="marketplace">
    <div class="row">
        <div class="col-lg-9">
            <h1>Marketplace</h1>
            <div class="marketplace-items">
                <!-- Items will be loaded dynamically -->
                <p>Welcome to the marketplace! Items will appear here.</p>
            </div>
        </div>
        <div class="col-lg-3">
            <!-- Sidebar -->
            {{{ if widgets.sidebar.length }}}
            {{each widgets.sidebar}}
            {{widgets.sidebar.html}}
            {{end}}
            {{{ end }}}
        </div>
    </div>
</div>