// CPP program to demonstrate pre increment
// operator.
#include <node.h>
namespace calculate
{
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Number;
    using v8::Object;
    using v8::Value;
    using v8::String;

    void Method2(const FunctionCallbackInfo<Value> &args)
    {

        Isolate *isolate = args.GetIsolate();

        int x = 10;
        int a;
        a = ++x;

        std::string s1 = "Pre Increment Operation";

        // Value of a will change
        std::string s2 = s1 + "\na = ";
        std::string s3 = s2 + std::to_string(a);

        // Value of x change before execution of a=++x;
        // rtn=strcat(rtn, "\nx = ");
        // rtn=strcat(rtn, x);

        // std::string total = ;

        args.GetReturnValue().Set(String::NewFromUtf8(
            isolate, s3.c_str()).ToLocalChecked());
    }

    void Initialize(Local<Object> exports)
    {
        NODE_SET_METHOD(exports, "calc2", Method2);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}

