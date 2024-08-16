# JTIDD Library

## Introduction

The JTIDD library allows you to automatically duplicate elements on a web page based on specified classes. This can be useful for dynamic content generation and testing.

## Installation

To use the JTIDD library in your project, follow these steps:

1. **Include jQuery**

   Ensure you have jQuery included in your project. You can add it via CDN:
   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   
2. **Include JTIDD Library**

   Include the JTIDD library in your HTML:
   ```html
   <script src="https://jtidd.pro/packages/lib/jtidd/1.0.0/jtidd.js"></script>

## Usage

After including the JTIDD library, you can use it as follows:

1. **HTML Markup**

    Use classes to specify duplication behavior:
    
     ```html
     <div class="classname jtidd jt-5">
        <p>This element will be duplicated 5 times</p>
     </div>
    ```
  
    For random duplication (between 1 and 21 times), use the class jt-auto:
  
    ```html
   <div class="classname jtidd jt-auto">
      <p>This element will be duplicated a random number of times between 1 and 21</p>
    </div>
    ```
    
2. **Initialize the Library**
     
    Call the jtidd.init() function to apply duplication:

    ```html
     <script>
        $(document).ready(function() {
            jtidd.init();
        });
    </script>
    ```

## Usage
Here are some examples of how you can use JTIDD library:

   ```html
   <div class="jtidd jt-3">
      <p>This element will be duplicated 3 times</p>
  </div>
  
  <div class="jtidd jt-auto">
      <p>This element will be duplicated a random number of times between 1 and 21</p>
  </div>
   ```

## Notes

Ensure that jQuery is loaded before the JTIDD library to avoid any errors.
