(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 288:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"list": "Home_list__qBUOI",
	"articleGrid": "Home_articleGrid__Ymg56",
	"grid": "Home_grid__GxQ85",
	"img": "Home_img__Xgkmt",
	"article": "Home_article__GbvwT",
	"articleWide": "Home_articleWide__RzduC",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "storyblok-js-client"
const external_storyblok_js_client_namespaceObject = require("storyblok-js-client");
var external_storyblok_js_client_default = /*#__PURE__*/__webpack_require__.n(external_storyblok_js_client_namespaceObject);
;// CONCATENATED MODULE: ./lib/storyblok.js


const Storyblok = new (external_storyblok_js_client_default())({
    accessToken: "nQVkuJ3ctE3MYTzGR3W2Swtt",
    cache: {
        clear: "auto",
        type: "memory"
    }
});
function useStoryblok(originalStory, preview) {
    let { 0: story , 1: setStory  } = (0,external_react_.useState)(originalStory);
    // adds the events for updating the visual editor
    // see https://www.storyblok.com/docs/guide/essentials/visual-editor#initializing-the-storyblok-js-bridge
    function initEventListeners() {
        const { StoryblokBridge  } = window;
        if (typeof StoryblokBridge !== "undefined") {
            // initialize the bridge with your token
            const storyblokInstance = new StoryblokBridge();
            // reload on Next.js page on save or publish event in the Visual Editor
            storyblokInstance.on([
                "change",
                "published"
            ], ()=>location.reload(true)
            );
            // live update the story on input events
            storyblokInstance.on("input", (event)=>{
                // check if the ids of the event and the passed story match
                if (event.story.content._uid === story.content._uid) {
                    // change the story content through the setStory function
                    setStory(event.story);
                }
            });
            storyblokInstance.on("enterEditmode", (event)=>{
                // loading the draft version on initial enter of editor
                Storyblok.get(`cdn/stories/${event.storyId}`, {
                    version: "draft"
                }).then(({ data  })=>{
                    if (data.story) {
                        setStory(data.story);
                    }
                }).catch((error)=>{
                    console.log(error);
                });
            });
        }
    }
    // appends the bridge script tag to our document
    // see https://www.storyblok.com/docs/guide/essentials/visual-editor#installing-the-storyblok-js-bridge
    function addBridge(callback) {
        // check if the script is already present
        const existingScript = document.getElementById("storyblokBridge");
        if (!existingScript) {
            const script = document.createElement("script");
            script.src = "//app.storyblok.com/f/storyblok-v2-latest.js";
            script.id = "storyblokBridge";
            document.body.appendChild(script);
            script.onload = ()=>{
                // once the script is loaded, init the event listeners
                callback();
            };
        } else {
            callback();
        }
    }
    (0,external_react_.useEffect)(()=>{
        // only load inside preview mode
        //using a boolean variable preview to conditionally load the bridge when we want it.
        if (preview) {
            // first load the bridge, then initialize the event listeners
            addBridge(initEventListeners);
        }
    }, [
        originalStory,
        preview,
        setStory
    ]); // runs the effect only once & defines effect dependencies
    (0,external_react_.useEffect)(()=>{
        setStory(originalStory);
    }, [
        originalStory
    ]);
    return story;
}
/* harmony default export */ const storyblok = (Storyblok);

;// CONCATENATED MODULE: external "@storyblok/storyblok-editable"
const storyblok_editable_namespaceObject = require("@storyblok/storyblok-editable");
;// CONCATENATED MODULE: ./components/Grid.js





const Grid = ({ blok: blok1  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ...(0,storyblok_editable_namespaceObject.sbEditable)(blok1),
        className: (Home_module_default()).grid,
        children: blok1.columns.map((blok)=>/*#__PURE__*/ jsx_runtime_.jsx(components_DynamicComponent, {
                blok: blok
            }, blok._uid)
        )
    }));
};
/* harmony default export */ const components_Grid = (Grid);

;// CONCATENATED MODULE: ./components/Header.js




const Header = ({ blok  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...(0,storyblok_editable_namespaceObject.sbEditable)(blok),
        className: (Home_module_default()).description,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: (Home_module_default()).title,
                children: blok.headline
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    " ",
                    blok.description,
                    " "
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Page.js



const Page = ({ blok: blok1  })=>/*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: blok1.body ? blok1.body.map((blok)=>/*#__PURE__*/ jsx_runtime_.jsx(components_DynamicComponent, {
                blok: blok
            }, blok._uid)
        ) : null
    })
;
/* harmony default export */ const components_Page = (Page);

;// CONCATENATED MODULE: ./components/Restaurants.js




const Restaurants = ({ blok  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...(0,storyblok_editable_namespaceObject.sbEditable)(blok),
        className: (Home_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: (Home_module_default()).img,
                src: blok.image.filename,
                alt: "restaurant",
                width: 250,
                height: 200
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    " ",
                    blok.name,
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: blok.description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    " ",
                    blok.location
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Restaurants = (Restaurants);

;// CONCATENATED MODULE: ./components/Article.js




const Article = ({ blok  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...(0,storyblok_editable_namespaceObject.sbEditable)(blok),
        className: (Home_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: (Home_module_default()).img,
                src: blok.hero_image.filename,
                alt: "tour_image",
                width: 250,
                height: 200
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: (Home_module_default()).titles,
                children: [
                    " ",
                    blok.title,
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: blok.experience
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    " ",
                    blok.author
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Article = (Article);

;// CONCATENATED MODULE: ./components/MyArticles.js





const MyArticles = ({ blok  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...(0,storyblok_editable_namespaceObject.sbEditable)(blok),
        className: (Home_module_default()).articleWide,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    className: (Home_module_default()).title,
                    children: [
                        " ",
                        blok.title,
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (Home_module_default()).articleGrid,
                children: blok.articles.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Home_module_default()).list,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Article, {
                            blok: article.content
                        })
                    }, article._uid)
                )
            })
        ]
    }));
};
/* harmony default export */ const components_MyArticles = (MyArticles);

;// CONCATENATED MODULE: ./components/DynamicComponent.js






const Components = {
    grid: components_Grid,
    header: components_Header,
    page: components_Page,
    restaurants: components_Restaurants,
    myArticles: components_MyArticles
};
const DynamicComponent = ({ blok  })=>{
    // check if component is defined above
    if (typeof Components[blok.component] !== "undefined") {
        const Component = Components[blok.component];
        return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
            blok: blok
        }, blok._uid));
    }
    // fallback if the component doesn't exist
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        children: [
            "The component ",
            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                children: blok.component
            }),
            " has not been created yet."
        ]
    }));
};
/* harmony default export */ const components_DynamicComponent = (DynamicComponent);

;// CONCATENATED MODULE: ./pages/index.js




// The Storyblok Client & hook


function Home(props, preview) {
    const enableBridge = true; // load the storyblok bridge everywhere
    // const enableBridge = preview; // enable bridge only in prevew mode
    const story = props.story;
    props = useStoryblok(story, enableBridge);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Restaurants"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_DynamicComponent, {
                    blok: story.content
                })
            })
        ]
    }));
};
async function getStaticProps({ preview =false  }) {
    // home is the default slug for the homepage in Storyblok
    let slug = "home";
    // load the published content outside of the preview mode
    let sbParams = {
        version: "draft",
        resolve_relations: "myArticles.articles"
    };
    if (preview) {
        // load the draft version inside of the preview mode
        sbParams.version = "draft";
        sbParams.cv = Date.now();
    }
    let { data  } = await storyblok.get(`cdn/stories/${slug}`, sbParams);
    return {
        props: {
            story: data ? data.story : null,
            preview
        },
        revalidate: 3600
    };
}


/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(348)));
module.exports = __webpack_exports__;

})();