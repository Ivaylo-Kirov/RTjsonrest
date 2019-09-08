API Gateway > Proxy integration with Lambda > Lambda code is below > One issue was CORS (config on API Gateway is not enough, and Python also needs to include it in the response headers > Otherwise fairly basic, axios get call, response.data into state, map through state, and generate component LIs

```
import json

def lambda_handler(event, context):
    # TODO implement
    todos = [{'id': 1, 'name': 'first'}, 
             {'id': 2, 'name': 'second'}]
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            },
        'body': json.dumps(todos)
    }
```