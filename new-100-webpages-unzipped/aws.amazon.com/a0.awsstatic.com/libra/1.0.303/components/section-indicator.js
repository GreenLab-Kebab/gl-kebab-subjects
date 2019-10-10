define(function() {
    "use strict";
    var defaults = {
        scrollIndicatorSelector: ".lb-scroll-indicator",
        scrollArrowsSelector: ".lb-scroll-arrows",
        scrollTextSelector: ".lb-scroll-text",
        sectionIndicatorFlagSelector: ".lb-section-indicator-flag",
        sectionMenuSelector: ".lb-section-menu",
        lastSectionItemSelector: ".lb-section-menu a:last-of-type",
        pageFooterSelector: "#aws-page-footer",
        pageHeaderSelector: "#aws-page-header",
        activeClassSelector: "lb-active",
        pageTopBoundary: 20,
        pageBottomPadding: 500,
        scrollDelay: 3e3,
        scrollPadding: 35
    };
    var SectionIndicator = function(elem) {
        this.$elem = $(elem);
        this.options = $.extend({}, defaults, this.$elem.data());
        this.$scrollIndicator = this.$elem.find(this.options.scrollIndicatorSelector);
        this.$scrollArrows = this.$elem.find(this.options.scrollArrowsSelector);
        this.$scrollText = this.$elem.find(this.options.scrollTextSelector);
        this.$sectionMenu = this.$elem.find(this.options.sectionMenuSelector);
        this.$sectionFlag = $(this.options.sectionIndicatorFlagSelector);
        this.$footer = $(this.options.pageFooterSelector);
        this.$header = $(this.options.pageHeaderSelector);
        this.lastSectionItem = this.options.lastSectionItemSelector;
        this.isActive = this.options.activeClassSelector;
        var that = this;
        this.addScrollIndicator();
        if (this.$sectionMenu.length) {
            this.createFlagIds();
            this.addSectionItems();
            this.toggleSectionTitles();
            this.enableSectionIndicator()
        } else {
            $(window).scroll(function() {
                that.resetScrollIndicator()
            });
            $(window).resize(function() {
                that.resetScrollIndicator()
            })
        }
    };
    SectionIndicator.prototype.getHeaderHeight = function() {
        if (this.$header.length > 0 && this.$header.css("position") === "fixed") {
            return this.$header.height()
        }
        return 0
    };
    SectionIndicator.prototype.addScrollIndicator = function() {
        var that = this;
        var pageTopBoundary = this.options.pageTopBoundary;
        var scrollPosition = $(window).scrollTop();
        this.scrollTimer = setTimeout(function() {
            that.$scrollArrows.show();
            if (scrollPosition <= pageTopBoundary) {
                that.$scrollText.show()
            }
        }, this.options.scrollDelay)
    };
    SectionIndicator.prototype.removeScrollIndicator = function() {
        this.$scrollIndicator.children().hide()
    };
    SectionIndicator.prototype.resetScrollIndicator = function() {
        var pageBottomPadding = this.options.pageBottomPadding;
        clearTimeout(this.scrollTimer);
        if (this.$scrollIndicator.css("display") === "block") {
            this.removeScrollIndicator()
        }
        var footerTop = this.$footer.position().top;
        if ($(window).scrollTop() + $(window).height() + pageBottomPadding < footerTop) {
            this.addScrollIndicator()
        }
    };
    SectionIndicator.prototype.createFlagIds = function() {
        this.$sectionFlag.each(function(index) {
            var id = "lb-section-indicator-" + index;
            $(this).attr("id", id)
        })
    };
    SectionIndicator.prototype.addSectionItems = function() {
        var that = this;
        this.$sectionFlag.each(function() {
            $("<a/>", {
                href: "#" + $(this).attr("id")
            }).appendTo(that.$sectionMenu);
            $(that.lastSectionItem).append("<div>" + $(this).attr("data-section-name") + "</div>")
        })
    };
    SectionIndicator.prototype.toggleSectionTitles = function() {
        var that = this;
        this.$sectionMenu.on("mouseenter", "a", function() {
            that.$sectionMenu.find("div").removeClass(that.isActive);
            $(this).find("div").addClass(that.isActive)
        });
        this.$sectionMenu.on("mouseleave", function() {
            $(this).find("div").removeClass(that.isActive)
        })
    };
    SectionIndicator.prototype.enableSectionIndicator = function() {
        var that = this;
        var scrollPadding = this.getHeaderHeight() + this.options.scrollPadding;
        var pageTopBoundary = this.options.pageTopBoundary;
        $(window).scroll(function() {
            var scrollPosition = $(this).scrollTop();
            clearTimeout(that.scrollTimer);
            if (scrollPosition <= pageTopBoundary) {
                that.$sectionMenu.removeClass(that.isActive);
                that.addScrollIndicator()
            } else {
                that.$sectionMenu.addClass(that.isActive);
                that.removeScrollIndicator();
                if ($(document).width() < 980) {
                    that.resetScrollIndicator()
                }
            }
            that.$sectionFlag.each(function() {
                var target = $(this).offset().top - scrollPadding;
                var id = $(this).attr("id");
                if (scrollPosition >= target) {
                    that.$sectionMenu.children().removeClass(that.isActive);
                    that.$sectionMenu.find('a[href="#' + id + '"]').addClass(that.isActive)
                }
            })
        });
        $(window).resize(function() {
            if (that.$sectionMenu.css("opacity") === "1") {
                clearTimeout(that.scrollTimer);
                that.removeScrollIndicator()
            }
        })
    };
    Libra.Comp.register({
        name: "section-indicator",
        initFct: function(elem) {
            new SectionIndicator(elem)
        },
        initTime: "documentReady"
    });
    return SectionIndicator
});