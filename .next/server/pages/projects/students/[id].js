/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/projects/students/[id]";
exports.ids = ["pages/projects/students/[id]"];
exports.modules = {

/***/ "./pages/projects/students/[id].js":
/*!*****************************************!*\
  !*** ./pages/projects/students/[id].js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"default\": function() { return /* binding */ Student; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/patrick31/Desktop/apps/react/patrick/pages/projects/students/[id].js\";\n\n\n\nasync function getStaticPaths() {\n  const res = await fetch(\"http://localhost:3000/api/students/\");\n  const students = await res.json();\n  const paths = students.map(student => {\n    return {\n      params: {\n        id: student.id.toString()\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps(context) {\n  const id = context.params.id;\n  const res = await fetch(`http://localhost:3000/api/students/${id}`);\n  const student = await res.json();\n  return {\n    props: {\n      student\n    }\n  };\n}\nfunction Student({\n  student\n}) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const genders = ['Male', 'Female'];\n\n  async function deletestudent(event) {\n    event.preventDefault();\n\n    if (confirm(`Are sure you want to delete ${student[0].name} ?`)) {\n      const req = await fetch(`/api/students/${student[0].id}/delete`);\n      const res = await req.text();\n\n      if (res == 'ok') {\n        router.push('/projects/students/');\n      } else {\n        alert(\"Failed to delete Row in database!\");\n      }\n    }\n  }\n\n  async function updateStudent(event) {\n    event.preventDefault();\n    const req = await fetch(`/api/students/${student[0].id}/update`, {\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      method: 'POST',\n      body: JSON.stringify({\n        name: event.target.name.value,\n        grade: event.target.grade.value,\n        DOB: event.target.date.value,\n        gender: event.target.gender.value\n      })\n    });\n    const res = await req.text();\n\n    if (res == 'ok') {\n      router.push('/projects/students/');\n    } else {\n      alert(\"Failed to Update Student info\");\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"jsx-721137103\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-721137103\" + \" \" + \"main\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: updateStudent,\n        className: \"jsx-721137103\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-721137103\",\n          children: \"Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          defaultValue: student[0].name,\n          id: \"name\",\n          className: \"jsx-721137103\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-721137103\",\n          children: \"Grade\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          defaultValue: student[0].grade,\n          id: \"grade\",\n          className: \"jsx-721137103\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n          className: \"jsx-721137103\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-721137103\",\n          children: \"DOB\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"date\",\n          defaultValue: moment__WEBPACK_IMPORTED_MODULE_3___default()(student[0].DOB).format('YYYY-MM-DD'),\n          id: \"date\",\n          placeholder: \"yyyy-mm-dd\",\n          className: \"jsx-721137103\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n          className: \"jsx-721137103\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"jsx-721137103\",\n          children: \"Gender\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }, this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n          className: \"jsx-721137103\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 37\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n          id: \"gender\",\n          className: \"jsx-721137103\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n            value: student[0].gender,\n            className: \"jsx-721137103\",\n            children: genders[student[0].gender]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 21\n          }, this), genders.map((gender, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n            value: index,\n            className: \"jsx-721137103\",\n            children: gender\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 25\n          }, this))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n          className: \"jsx-721137103\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          className: \"jsx-721137103\" + \" \" + \"btn btn-outline-info\",\n          children: \"Update\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: deletestudent,\n          className: \"jsx-721137103\" + \" \" + \"btn btn-outline-danger\",\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"721137103\",\n      children: \"form.jsx-721137103 button.jsx-721137103{width:40%;margin:10px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrMzEvRGVza3RvcC9hcHBzL3JlYWN0L3BhdHJpY2svcGFnZXMvcHJvamVjdHMvc3R1ZGVudHMvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR29CLEFBR3NCLFVBRWQsWUFBQyIsImZpbGUiOiIvVXNlcnMvcGF0cmljazMxL0Rlc2t0b3AvYXBwcy9yZWFjdC9wYXRyaWNrL3BhZ2VzL3Byb2plY3RzL3N0dWRlbnRzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3N0dWRlbnRzL1wiKTtcbiAgICBjb25zdCBzdHVkZW50cyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zdCBwYXRocyA9IHN0dWRlbnRzLm1hcChzdHVkZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczogeyBpZDogc3R1ZGVudC5pZC50b1N0cmluZygpIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3N0dWRlbnRzLyR7aWR9YClcbiAgICBjb25zdCBzdHVkZW50ID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgc3R1ZGVudCB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R1ZGVudCh7IHN0dWRlbnQgfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBnZW5kZXJzID0gWydNYWxlJywgJ0ZlbWFsZSddXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZXN0dWRlbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGNvbmZpcm0oYEFyZSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke3N0dWRlbnRbMF0ubmFtZX0gP2ApKSB7XG4gICAgICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChgL2FwaS9zdHVkZW50cy8ke3N0dWRlbnRbMF0uaWR9L2RlbGV0ZWApO1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLnRleHQoKVxuXG4gICAgICAgICAgICBpZiAocmVzID09ICdvaycpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2plY3RzL3N0dWRlbnRzLycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byBkZWxldGUgUm93IGluIGRhdGFiYXNlIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3R1ZGVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGAvYXBpL3N0dWRlbnRzLyR7c3R1ZGVudFswXS5pZH0vdXBkYXRlYCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IGV2ZW50LnRhcmdldC5ncmFkZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBET0I6IGV2ZW50LnRhcmdldC5kYXRlLnZhbHVlLFxuICAgICAgICAgICAgICAgIGdlbmRlcjogZXZlbnQudGFyZ2V0LmdlbmRlci52YWx1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS50ZXh0KClcblxuICAgICAgICBpZiAocmVzID09ICdvaycpIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcHJvamVjdHMvc3R1ZGVudHMvJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIFVwZGF0ZSBTdHVkZW50IGluZm9cIilcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dXBkYXRlU3R1ZGVudH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+TmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3N0dWRlbnRbMF0ubmFtZX0gaWQ9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5HcmFkZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3N0dWRlbnRbMF0uZ3JhZGV9IGlkPVwiZ3JhZGVcIiAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgPHNwYW4+RE9CPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGRlZmF1bHRWYWx1ZT17bW9tZW50KHN0dWRlbnRbMF0uRE9CKS5mb3JtYXQoJ1lZWVktTU0tREQnKX0gaWQ9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJ5eXl5LW1tLWRkXCIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIDxzcGFuPkdlbmRlcjwvc3Bhbj4gPGJyLz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZ2VuZGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtzdHVkZW50WzBdLmdlbmRlcn0+e2dlbmRlcnNbc3R1ZGVudFswXS5nZW5kZXJdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7Z2VuZGVycy5tYXAoKGdlbmRlcixpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXh9IGtleT17aW5kZXh9PntnZW5kZXJ9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIiB0eXBlPVwic3VibWl0XCI+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCIgb25DbGljaz17ZGVsZXRlc3R1ZGVudH0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0gYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6NDAlO1xuICAgICAgICAgICAgbWFyZ2luOjEwcHhcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/patrick31/Desktop/apps/react/patrick/pages/projects/students/[id].js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 12\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRyaWNrLy4vcGFnZXMvcHJvamVjdHMvc3R1ZGVudHMvW2lkXS5qcz9jMmFmIl0sIm5hbWVzIjpbImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJzdHVkZW50cyIsImpzb24iLCJwYXRocyIsIm1hcCIsInN0dWRlbnQiLCJwYXJhbXMiLCJpZCIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyIsIlN0dWRlbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZW5kZXJzIiwiZGVsZXRlc3R1ZGVudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25maXJtIiwibmFtZSIsInJlcSIsInRleHQiLCJwdXNoIiwiYWxlcnQiLCJ1cGRhdGVTdHVkZW50IiwiaGVhZGVycyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGFyZ2V0IiwidmFsdWUiLCJncmFkZSIsIkRPQiIsImRhdGUiLCJnZW5kZXIiLCJtb21lbnQiLCJmb3JtYXQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sZUFBZUEsY0FBZixHQUFnQztBQUNuQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHFDQUFELENBQXZCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUF2QjtBQUVBLFFBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxHQUFULENBQWFDLE9BQU8sSUFBSTtBQUNsQyxXQUFPO0FBQ0hDLFlBQU0sRUFBRTtBQUFFQyxVQUFFLEVBQUVGLE9BQU8sQ0FBQ0UsRUFBUixDQUFXQyxRQUFYO0FBQU47QUFETCxLQUFQO0FBR0gsR0FKYSxDQUFkO0FBTUEsU0FBTztBQUNITCxTQURHO0FBRUhNLFlBQVEsRUFBRTtBQUZQLEdBQVA7QUFJSDtBQUdNLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVD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SixlQW1CSTtBQUF5QyxjQUFJLEVBQUMsUUFBOUM7QUFBQSw2Q0FBa0Isc0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CSixlQW9CSTtBQUEyQyxpQkFBTyxFQUFFdkIsYUFBcEQ7QUFBQSw2Q0FBa0Isd0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFpQ0giLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9zdHVkZW50cy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zdHVkZW50cy9cIik7XG4gICAgY29uc3Qgc3R1ZGVudHMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc3QgcGF0aHMgPSBzdHVkZW50cy5tYXAoc3R1ZGVudCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IHN0dWRlbnQuaWQudG9TdHJpbmcoKSB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zdHVkZW50cy8ke2lkfWApXG4gICAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIHJldHVybiB7IHByb3BzOiB7IHN0dWRlbnQgfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0dWRlbnQoeyBzdHVkZW50IH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgZ2VuZGVycyA9IFsnTWFsZScsICdGZW1hbGUnXVxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBkZWxldGVzdHVkZW50KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChjb25maXJtKGBBcmUgc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtzdHVkZW50WzBdLm5hbWV9ID9gKSkge1xuICAgICAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goYC9hcGkvc3R1ZGVudHMvJHtzdHVkZW50WzBdLmlkfS9kZWxldGVgKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS50ZXh0KClcblxuICAgICAgICAgICAgaWYgKHJlcyA9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9qZWN0cy9zdHVkZW50cy8nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gZGVsZXRlIFJvdyBpbiBkYXRhYmFzZSFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0dWRlbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChgL2FwaS9zdHVkZW50cy8ke3N0dWRlbnRbMF0uaWR9L3VwZGF0ZWAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgIGdyYWRlOiBldmVudC50YXJnZXQuZ3JhZGUudmFsdWUsXG4gICAgICAgICAgICAgICAgRE9COiBldmVudC50YXJnZXQuZGF0ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBnZW5kZXI6IGV2ZW50LnRhcmdldC5nZW5kZXIudmFsdWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEudGV4dCgpXG5cbiAgICAgICAgaWYgKHJlcyA9PSAnb2snKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2plY3RzL3N0dWRlbnRzLycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byBVcGRhdGUgU3R1ZGVudCBpbmZvXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3VwZGF0ZVN0dWRlbnR9PlxuICAgICAgICAgICAgICAgIDxzcGFuPk5hbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtzdHVkZW50WzBdLm5hbWV9IGlkPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+R3JhZGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtzdHVkZW50WzBdLmdyYWRlfSBpZD1cImdyYWRlXCIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIDxzcGFuPkRPQjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBkZWZhdWx0VmFsdWU9e21vbWVudChzdHVkZW50WzBdLkRPQikuZm9ybWF0KCdZWVlZLU1NLUREJyl9IGlkPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPVwieXl5eS1tbS1kZFwiIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8c3Bhbj5HZW5kZXI8L3NwYW4+IDxici8+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImdlbmRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17c3R1ZGVudFswXS5nZW5kZXJ9PntnZW5kZXJzW3N0dWRlbnRbMF0uZ2VuZGVyXX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2dlbmRlcnMubWFwKChnZW5kZXIsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4fSBrZXk9e2luZGV4fT57Z2VuZGVyfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCIgdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiIG9uQ2xpY2s9e2RlbGV0ZXN0dWRlbnR9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3JtIGJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOjQwJTtcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/students/[id].js\n");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/projects/students/[id].js"));
module.exports = __webpack_exports__;

})();