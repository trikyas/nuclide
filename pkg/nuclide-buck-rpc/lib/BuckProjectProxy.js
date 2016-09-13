"use strict";

let Observable, trackOperationTiming;

module.exports = _client => {
  const remoteModule = {};
  remoteModule.BuckProject = class {
    static getRootForPath(arg0) {
      return _client.marshalArguments(Array.from(arguments), [{
        name: "file",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 165
          },
          kind: "named",
          name: "NuclideUri"
        }
      }]).then(args => {
        return _client.callRemoteFunction("BuckProject/getRootForPath", "promise", args);
      }).then(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 165
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 165
            },
            kind: "named",
            name: "NuclideUri"
          }
        });
      });
    }
    constructor(arg0) {
      _client.createRemoteObject("BuckProject", this, [arg0], [{
        name: "options",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 148
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 148
            },
            name: "rootPath",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 148
              },
              kind: "named",
              name: "NuclideUri"
            },
            optional: false
          }]
        }
      }])
    }
    getPath() {
      return trackOperationTiming("BuckProject.getPath", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "getPath", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 157
            },
            kind: "named",
            name: "NuclideUri"
          });
        });
      });
    }
    getBuildFile(arg0) {
      return trackOperationTiming("BuckProject.getBuildFile", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "targetName",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 172
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "getBuildFile", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 172
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 172
              },
              kind: "string"
            }
          });
        });
      });
    }
    getOwner(arg0) {
      return trackOperationTiming("BuckProject.getOwner", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "filePath",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 227
            },
            kind: "named",
            name: "NuclideUri"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "getOwner", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 227
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 227
              },
              kind: "string"
            }
          });
        });
      });
    }
    getBuckConfig(arg0, arg1) {
      return trackOperationTiming("BuckProject.getBuckConfig", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "section",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 245
            },
            kind: "string"
          }
        }, {
          name: "property",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 245
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "getBuckConfig", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 245
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 245
              },
              kind: "string"
            }
          });
        });
      });
    }
    build(arg0, arg1) {
      return trackOperationTiming("BuckProject.build", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "buildTargets",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 282
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 282
              },
              kind: "string"
            }
          }
        }, {
          name: "options",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 283
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 283
              },
              kind: "named",
              name: "BaseBuckBuildOptions"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "build", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 284
            },
            kind: "any"
          });
        });
      });
    }
    install(arg0, arg1, arg2) {
      return trackOperationTiming("BuckProject.install", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "buildTargets",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 300
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 300
              },
              kind: "string"
            }
          }
        }, {
          name: "simulator",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 301
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 301
              },
              kind: "string"
            }
          }
        }, {
          name: "runOptions",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 302
            },
            kind: "nullable",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 302
              },
              kind: "named",
              name: "BuckRunOptions"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "install", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 303
            },
            kind: "any"
          });
        });
      });
    }
    buildWithOutput(arg0, arg1) {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), [{
        name: "buildTargets",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 351
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 351
            },
            kind: "string"
          }
        }
      }, {
        name: "extraArguments",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 352
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 352
            },
            kind: "string"
          }
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 138
          },
          name: "BuckProject"
        }).then(id => {
          return _client.callRemoteMethod(id, "buildWithOutput", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 353
          },
          kind: "named",
          name: "ProcessMessage"
        });
      }).publish();
    }
    testWithOutput(arg0, arg1) {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), [{
        name: "buildTargets",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 369
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 369
            },
            kind: "string"
          }
        }
      }, {
        name: "extraArguments",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 370
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 370
            },
            kind: "string"
          }
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 138
          },
          name: "BuckProject"
        }).then(id => {
          return _client.callRemoteMethod(id, "testWithOutput", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 371
          },
          kind: "named",
          name: "ProcessMessage"
        });
      }).publish();
    }
    installWithOutput(arg0, arg1, arg2, arg3) {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), [{
        name: "buildTargets",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 387
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 387
            },
            kind: "string"
          }
        }
      }, {
        name: "extraArguments",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 388
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 388
            },
            kind: "string"
          }
        }
      }, {
        name: "simulator",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 389
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 389
            },
            kind: "string"
          }
        }
      }, {
        name: "runOptions",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 390
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 390
            },
            kind: "named",
            name: "BuckRunOptions"
          }
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 138
          },
          name: "BuckProject"
        }).then(id => {
          return _client.callRemoteMethod(id, "installWithOutput", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 391
          },
          kind: "named",
          name: "ProcessMessage"
        });
      }).publish();
    }
    listAliases() {
      return trackOperationTiming("BuckProject.listAliases", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "listAliases", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 465
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 465
              },
              kind: "string"
            }
          });
        });
      });
    }
    resolveAlias(arg0) {
      return trackOperationTiming("BuckProject.resolveAlias", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "aliasOrTarget",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 475
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "resolveAlias", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 475
            },
            kind: "string"
          });
        });
      });
    }
    showOutput(arg0) {
      return trackOperationTiming("BuckProject.showOutput", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "aliasOrTarget",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 488
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "showOutput", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 488
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 488
              },
              kind: "named",
              name: "Object"
            }
          });
        });
      });
    }
    buildRuleTypeFor(arg0) {
      return trackOperationTiming("BuckProject.buildRuleTypeFor", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "aliasOrTarget",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 494
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "buildRuleTypeFor", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 494
            },
            kind: "string"
          });
        });
      });
    }
    getHTTPServerPort() {
      return trackOperationTiming("BuckProject.getHTTPServerPort", () => {
        return _client.marshalArguments(Array.from(arguments), []).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "getHTTPServerPort", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 519
            },
            kind: "number"
          });
        });
      });
    }
    query(arg0) {
      return trackOperationTiming("BuckProject.query", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "query",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 527
            },
            kind: "string"
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "query", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 527
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 527
              },
              kind: "string"
            }
          });
        });
      });
    }
    queryWithArgs(arg0, arg1) {
      return trackOperationTiming("BuckProject.queryWithArgs", () => {
        return _client.marshalArguments(Array.from(arguments), [{
          name: "query",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 544
            },
            kind: "string"
          }
        }, {
          name: "args",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 545
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 545
              },
              kind: "string"
            }
          }
        }]).then(args => {
          return _client.marshal(this, {
            kind: "named",
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 138
            },
            name: "BuckProject"
          }).then(id => {
            return _client.callRemoteMethod(id, "queryWithArgs", "promise", args);
          });
        }).then(value => {
          return _client.unmarshal(value, {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 546
            },
            kind: "object",
            fields: []
          });
        });
      });
    }
    getWebSocketStream(arg0) {
      return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), [{
        name: "httpPort",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 563
          },
          kind: "number"
        }
      }]).then(args => {
        return _client.marshal(this, {
          kind: "named",
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 138
          },
          name: "BuckProject"
        }).then(id => {
          return _client.callRemoteMethod(id, "getWebSocketStream", "observable", args);
        });
      })).concatMap(id => id).concatMap(value => {
        return _client.unmarshal(value, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 563
          },
          kind: "named",
          name: "Object"
        });
      }).publish();
    }
    dispose() {
      return _client.disposeRemoteObject(this);
    }
  };
  return remoteModule;
};

Object.defineProperty(module.exports, "inject", {
  value: function () {
    Observable = arguments[0];
    trackOperationTiming = arguments[1];
  }
});
Object.defineProperty(module.exports, "defs", {
  value: new Map([["Object", {
    kind: "alias",
    name: "Object",
    location: {
      type: "builtin"
    }
  }], ["Date", {
    kind: "alias",
    name: "Date",
    location: {
      type: "builtin"
    }
  }], ["RegExp", {
    kind: "alias",
    name: "RegExp",
    location: {
      type: "builtin"
    }
  }], ["Buffer", {
    kind: "alias",
    name: "Buffer",
    location: {
      type: "builtin"
    }
  }], ["fs.Stats", {
    kind: "alias",
    name: "fs.Stats",
    location: {
      type: "builtin"
    }
  }], ["NuclideUri", {
    kind: "alias",
    name: "NuclideUri",
    location: {
      type: "builtin"
    }
  }], ["dontRunOptions", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "BuckProject.js",
      line: 32
    },
    name: "dontRunOptions",
    definition: {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 32
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 33
        },
        name: "run",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 33
          },
          kind: "boolean-literal",
          value: false
        },
        optional: false
      }]
    }
  }], ["doRunOptions", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "BuckProject.js",
      line: 36
    },
    name: "doRunOptions",
    definition: {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 36
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 37
        },
        name: "run",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 37
          },
          kind: "boolean-literal",
          value: true
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 38
        },
        name: "debug",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 38
          },
          kind: "boolean"
        },
        optional: false
      }]
    }
  }], ["BuckRunOptions", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "BuckProject.js",
      line: 41
    },
    name: "BuckRunOptions",
    definition: {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 41
      },
      kind: "union",
      types: [{
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 32
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 33
          },
          name: "run",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 33
            },
            kind: "boolean-literal",
            value: false
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 36
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 37
          },
          name: "run",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 37
            },
            kind: "boolean-literal",
            value: true
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 38
          },
          name: "debug",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 38
            },
            kind: "boolean"
          },
          optional: false
        }]
      }],
      discriminantField: "run"
    }
  }], ["BuckWebSocketMessage", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "BuckProject.js",
      line: 43
    },
    name: "BuckWebSocketMessage",
    definition: {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 43
      },
      kind: "union",
      types: [{
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 43
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 45
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 45
            },
            kind: "string-literal",
            value: "SocketConnected"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 46
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 47
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 47
            },
            kind: "string-literal",
            value: "BuildProgressUpdated"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 48
          },
          name: "progressValue",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 48
            },
            kind: "number"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 49
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 50
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 50
            },
            kind: "string-literal",
            value: "BuildFinished"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 51
          },
          name: "exitCode",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 51
            },
            kind: "number"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 52
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 53
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 53
            },
            kind: "string-literal",
            value: "BuildStarted"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 54
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 55
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 55
            },
            kind: "string-literal",
            value: "ConsoleEvent"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 56
          },
          name: "message",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 56
            },
            kind: "string"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 57
          },
          name: "level",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 57
            },
            kind: "object",
            fields: [{
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 58
              },
              name: "name",
              type: {
                location: {
                  type: "source",
                  fileName: "BuckProject.js",
                  line: 58
                },
                kind: "union",
                types: [{
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 58
                  },
                  kind: "string-literal",
                  value: "OFF"
                }, {
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 58
                  },
                  kind: "string-literal",
                  value: "SEVERE"
                }, {
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 58
                  },
                  kind: "string-literal",
                  value: "WARNING"
                }, {
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 58
                  },
                  kind: "string-literal",
                  value: "INFO"
                }, {
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 58
                  },
                  kind: "string-literal",
                  value: "CONFIG"
                }, {
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 58
                  },
                  kind: "string-literal",
                  value: "FINE"
                }, {
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 58
                  },
                  kind: "string-literal",
                  value: "FINER"
                }, {
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 58
                  },
                  kind: "string-literal",
                  value: "FINEST"
                }, {
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 58
                  },
                  kind: "string-literal",
                  value: "ALL"
                }]
              },
              optional: false
            }]
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 60
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 61
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 61
            },
            kind: "string-literal",
            value: "ParseStarted"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 62
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 63
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 63
            },
            kind: "string-literal",
            value: "ParseFinished"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 64
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 65
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 65
            },
            kind: "string-literal",
            value: "InstallFinished"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 66
          },
          name: "success",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 66
            },
            kind: "boolean"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 67
          },
          name: "pid",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 67
            },
            kind: "number"
          },
          optional: true
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 68
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 69
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 69
            },
            kind: "string-literal",
            value: "RunStarted"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 70
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 71
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 71
            },
            kind: "string-literal",
            value: "RunComplete"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 72
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 73
          },
          name: "type",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 73
            },
            kind: "string-literal",
            value: "ResultsAvailable"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 74
          },
          name: "results",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 74
            },
            kind: "object",
            fields: [{
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 75
              },
              name: "buildTarget",
              type: {
                location: {
                  type: "source",
                  fileName: "BuckProject.js",
                  line: 75
                },
                kind: "object",
                fields: [{
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 76
                  },
                  name: "shortName",
                  type: {
                    location: {
                      type: "source",
                      fileName: "BuckProject.js",
                      line: 76
                    },
                    kind: "string"
                  },
                  optional: false
                }, {
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 77
                  },
                  name: "baseName",
                  type: {
                    location: {
                      type: "source",
                      fileName: "BuckProject.js",
                      line: 77
                    },
                    kind: "string"
                  },
                  optional: false
                }]
              },
              optional: false
            }, {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 79
              },
              name: "success",
              type: {
                location: {
                  type: "source",
                  fileName: "BuckProject.js",
                  line: 79
                },
                kind: "boolean"
              },
              optional: false
            }, {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 80
              },
              name: "failureCount",
              type: {
                location: {
                  type: "source",
                  fileName: "BuckProject.js",
                  line: 80
                },
                kind: "number"
              },
              optional: false
            }, {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 81
              },
              name: "totalNumberOfTests",
              type: {
                location: {
                  type: "source",
                  fileName: "BuckProject.js",
                  line: 81
                },
                kind: "number"
              },
              optional: false
            }, {
              location: {
                type: "source",
                fileName: "BuckProject.js",
                line: 82
              },
              name: "testCases",
              type: {
                location: {
                  type: "source",
                  fileName: "BuckProject.js",
                  line: 82
                },
                kind: "array",
                type: {
                  location: {
                    type: "source",
                    fileName: "BuckProject.js",
                    line: 82
                  },
                  kind: "object",
                  fields: [{
                    location: {
                      type: "source",
                      fileName: "BuckProject.js",
                      line: 83
                    },
                    name: "success",
                    type: {
                      location: {
                        type: "source",
                        fileName: "BuckProject.js",
                        line: 83
                      },
                      kind: "boolean"
                    },
                    optional: false
                  }, {
                    location: {
                      type: "source",
                      fileName: "BuckProject.js",
                      line: 84
                    },
                    name: "failureCount",
                    type: {
                      location: {
                        type: "source",
                        fileName: "BuckProject.js",
                        line: 84
                      },
                      kind: "number"
                    },
                    optional: false
                  }, {
                    location: {
                      type: "source",
                      fileName: "BuckProject.js",
                      line: 85
                    },
                    name: "skippedCount",
                    type: {
                      location: {
                        type: "source",
                        fileName: "BuckProject.js",
                        line: 85
                      },
                      kind: "number"
                    },
                    optional: false
                  }, {
                    location: {
                      type: "source",
                      fileName: "BuckProject.js",
                      line: 86
                    },
                    name: "testCaseName",
                    type: {
                      location: {
                        type: "source",
                        fileName: "BuckProject.js",
                        line: 86
                      },
                      kind: "string"
                    },
                    optional: false
                  }, {
                    location: {
                      type: "source",
                      fileName: "BuckProject.js",
                      line: 87
                    },
                    name: "testResults",
                    type: {
                      location: {
                        type: "source",
                        fileName: "BuckProject.js",
                        line: 87
                      },
                      kind: "array",
                      type: {
                        location: {
                          type: "source",
                          fileName: "BuckProject.js",
                          line: 87
                        },
                        kind: "object",
                        fields: [{
                          location: {
                            type: "source",
                            fileName: "BuckProject.js",
                            line: 88
                          },
                          name: "testCaseName",
                          type: {
                            location: {
                              type: "source",
                              fileName: "BuckProject.js",
                              line: 88
                            },
                            kind: "string"
                          },
                          optional: false
                        }, {
                          location: {
                            type: "source",
                            fileName: "BuckProject.js",
                            line: 89
                          },
                          name: "testName",
                          type: {
                            location: {
                              type: "source",
                              fileName: "BuckProject.js",
                              line: 89
                            },
                            kind: "string"
                          },
                          optional: false
                        }, {
                          location: {
                            type: "source",
                            fileName: "BuckProject.js",
                            line: 90
                          },
                          name: "type",
                          type: {
                            location: {
                              type: "source",
                              fileName: "BuckProject.js",
                              line: 90
                            },
                            kind: "string"
                          },
                          optional: false
                        }, {
                          location: {
                            type: "source",
                            fileName: "BuckProject.js",
                            line: 91
                          },
                          name: "time",
                          type: {
                            location: {
                              type: "source",
                              fileName: "BuckProject.js",
                              line: 91
                            },
                            kind: "number"
                          },
                          optional: false
                        }, {
                          location: {
                            type: "source",
                            fileName: "BuckProject.js",
                            line: 92
                          },
                          name: "message",
                          type: {
                            location: {
                              type: "source",
                              fileName: "BuckProject.js",
                              line: 92
                            },
                            kind: "string"
                          },
                          optional: false
                        }, {
                          location: {
                            type: "source",
                            fileName: "BuckProject.js",
                            line: 93
                          },
                          name: "stacktrace",
                          type: {
                            location: {
                              type: "source",
                              fileName: "BuckProject.js",
                              line: 93
                            },
                            kind: "nullable",
                            type: {
                              location: {
                                type: "source",
                                fileName: "BuckProject.js",
                                line: 93
                              },
                              kind: "string"
                            }
                          },
                          optional: false
                        }, {
                          location: {
                            type: "source",
                            fileName: "BuckProject.js",
                            line: 94
                          },
                          name: "stdOut",
                          type: {
                            location: {
                              type: "source",
                              fileName: "BuckProject.js",
                              line: 94
                            },
                            kind: "string"
                          },
                          optional: false
                        }, {
                          location: {
                            type: "source",
                            fileName: "BuckProject.js",
                            line: 95
                          },
                          name: "stdErr",
                          type: {
                            location: {
                              type: "source",
                              fileName: "BuckProject.js",
                              line: 95
                            },
                            kind: "string"
                          },
                          optional: false
                        }]
                      }
                    },
                    optional: false
                  }]
                }
              },
              optional: false
            }]
          },
          optional: false
        }]
      }],
      discriminantField: "type"
    }
  }], ["BaseBuckBuildOptions", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "BuckProject.js",
      line: 102
    },
    name: "BaseBuckBuildOptions",
    definition: {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 102
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 103
        },
        name: "install",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 103
          },
          kind: "boolean"
        },
        optional: true
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 104
        },
        name: "test",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 104
          },
          kind: "boolean"
        },
        optional: true
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 105
        },
        name: "simulator",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 105
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 105
            },
            kind: "string"
          }
        },
        optional: true
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 106
        },
        name: "runOptions",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 106
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 106
            },
            kind: "named",
            name: "BuckRunOptions"
          }
        },
        optional: true
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 108
        },
        name: "commandOptions",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 108
          },
          kind: "named",
          name: "Object"
        },
        optional: true
      }, {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 109
        },
        name: "extraArguments",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 109
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 109
            },
            kind: "string"
          }
        },
        optional: true
      }]
    }
  }], ["BuckProject", {
    kind: "interface",
    name: "BuckProject",
    location: {
      type: "source",
      fileName: "BuckProject.js",
      line: 138
    },
    constructorArgs: [{
      name: "options",
      type: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 148
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 148
          },
          name: "rootPath",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 148
            },
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }]
      }
    }],
    staticMethods: new Map([["getRootForPath", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 165
      },
      kind: "function",
      argumentTypes: [{
        name: "file",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 165
          },
          kind: "named",
          name: "NuclideUri"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 165
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 165
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 165
            },
            kind: "named",
            name: "NuclideUri"
          }
        }
      }
    }]]),
    instanceMethods: new Map([["dispose", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 153
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 153
        },
        kind: "void"
      }
    }], ["getPath", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 157
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 157
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 157
          },
          kind: "named",
          name: "NuclideUri"
        }
      }
    }], ["getBuildFile", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 172
      },
      kind: "function",
      argumentTypes: [{
        name: "targetName",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 172
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 172
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 172
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 172
            },
            kind: "string"
          }
        }
      }
    }], ["getOwner", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 227
      },
      kind: "function",
      argumentTypes: [{
        name: "filePath",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 227
          },
          kind: "named",
          name: "NuclideUri"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 227
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 227
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 227
            },
            kind: "string"
          }
        }
      }
    }], ["getBuckConfig", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 245
      },
      kind: "function",
      argumentTypes: [{
        name: "section",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 245
          },
          kind: "string"
        }
      }, {
        name: "property",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 245
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 245
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 245
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 245
            },
            kind: "string"
          }
        }
      }
    }], ["build", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 281
      },
      kind: "function",
      argumentTypes: [{
        name: "buildTargets",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 282
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 282
            },
            kind: "string"
          }
        }
      }, {
        name: "options",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 283
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 283
            },
            kind: "named",
            name: "BaseBuckBuildOptions"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 284
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 284
          },
          kind: "any"
        }
      }
    }], ["install", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 299
      },
      kind: "function",
      argumentTypes: [{
        name: "buildTargets",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 300
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 300
            },
            kind: "string"
          }
        }
      }, {
        name: "simulator",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 301
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 301
            },
            kind: "string"
          }
        }
      }, {
        name: "runOptions",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 302
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 302
            },
            kind: "named",
            name: "BuckRunOptions"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 303
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 303
          },
          kind: "any"
        }
      }
    }], ["buildWithOutput", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 350
      },
      kind: "function",
      argumentTypes: [{
        name: "buildTargets",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 351
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 351
            },
            kind: "string"
          }
        }
      }, {
        name: "extraArguments",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 352
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 352
            },
            kind: "string"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 353
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 353
          },
          kind: "named",
          name: "ProcessMessage"
        }
      }
    }], ["testWithOutput", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 368
      },
      kind: "function",
      argumentTypes: [{
        name: "buildTargets",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 369
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 369
            },
            kind: "string"
          }
        }
      }, {
        name: "extraArguments",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 370
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 370
            },
            kind: "string"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 371
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 371
          },
          kind: "named",
          name: "ProcessMessage"
        }
      }
    }], ["installWithOutput", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 386
      },
      kind: "function",
      argumentTypes: [{
        name: "buildTargets",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 387
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 387
            },
            kind: "string"
          }
        }
      }, {
        name: "extraArguments",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 388
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 388
            },
            kind: "string"
          }
        }
      }, {
        name: "simulator",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 389
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 389
            },
            kind: "string"
          }
        }
      }, {
        name: "runOptions",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 390
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 390
            },
            kind: "named",
            name: "BuckRunOptions"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 391
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 391
          },
          kind: "named",
          name: "ProcessMessage"
        }
      }
    }], ["listAliases", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 465
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 465
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 465
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 465
            },
            kind: "string"
          }
        }
      }
    }], ["resolveAlias", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 475
      },
      kind: "function",
      argumentTypes: [{
        name: "aliasOrTarget",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 475
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 475
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 475
          },
          kind: "string"
        }
      }
    }], ["showOutput", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 488
      },
      kind: "function",
      argumentTypes: [{
        name: "aliasOrTarget",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 488
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 488
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 488
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 488
            },
            kind: "named",
            name: "Object"
          }
        }
      }
    }], ["buildRuleTypeFor", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 494
      },
      kind: "function",
      argumentTypes: [{
        name: "aliasOrTarget",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 494
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 494
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 494
          },
          kind: "string"
        }
      }
    }], ["getHTTPServerPort", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 519
      },
      kind: "function",
      argumentTypes: [],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 519
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 519
          },
          kind: "number"
        }
      }
    }], ["query", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 527
      },
      kind: "function",
      argumentTypes: [{
        name: "query",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 527
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 527
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 527
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 527
            },
            kind: "string"
          }
        }
      }
    }], ["queryWithArgs", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 543
      },
      kind: "function",
      argumentTypes: [{
        name: "query",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 544
          },
          kind: "string"
        }
      }, {
        name: "args",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 545
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "BuckProject.js",
              line: 545
            },
            kind: "string"
          }
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 546
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 546
          },
          kind: "object",
          fields: []
        }
      }
    }], ["getWebSocketStream", {
      location: {
        type: "source",
        fileName: "BuckProject.js",
        line: 563
      },
      kind: "function",
      argumentTypes: [{
        name: "httpPort",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 563
          },
          kind: "number"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "BuckProject.js",
          line: 563
        },
        kind: "observable",
        type: {
          location: {
            type: "source",
            fileName: "BuckProject.js",
            line: 563
          },
          kind: "named",
          name: "Object"
        }
      }
    }]])
  }], ["ProcessMessage", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "process-rpc-types.js",
      line: 12
    },
    name: "ProcessMessage",
    definition: {
      location: {
        type: "source",
        fileName: "process-rpc-types.js",
        line: 12
      },
      kind: "union",
      types: [{
        location: {
          type: "source",
          fileName: "process-rpc-types.js",
          line: 12
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 13
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 13
            },
            kind: "string-literal",
            value: "stdout"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 14
          },
          name: "data",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 14
            },
            kind: "string"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "process-rpc-types.js",
          line: 15
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 16
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 16
            },
            kind: "string-literal",
            value: "stderr"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 17
          },
          name: "data",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 17
            },
            kind: "string"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "process-rpc-types.js",
          line: 18
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 19
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 19
            },
            kind: "string-literal",
            value: "exit"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 20
          },
          name: "exitCode",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 20
            },
            kind: "number"
          },
          optional: false
        }]
      }, {
        location: {
          type: "source",
          fileName: "process-rpc-types.js",
          line: 21
        },
        kind: "object",
        fields: [{
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 22
          },
          name: "kind",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 22
            },
            kind: "string-literal",
            value: "error"
          },
          optional: false
        }, {
          location: {
            type: "source",
            fileName: "process-rpc-types.js",
            line: 23
          },
          name: "error",
          type: {
            location: {
              type: "source",
              fileName: "process-rpc-types.js",
              line: 23
            },
            kind: "named",
            name: "Object"
          },
          optional: false
        }]
      }],
      discriminantField: "kind"
    }
  }]])
});