export async function getTasks() {
  const response = await fetch('http://localhost:3000/tasks/getTasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '123456'
    }
  });
  return response.json();
}

export async function addTask(task: any) {
  const response = await fetch('http://localhost:3000/tasks/addTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '123456'
    },
    body: JSON.stringify(task)
  });
  return response.json();
}

export async function removeTask(id: string) {
  const response = await fetch(`http://localhost:3000/tasks/removeTask/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '123456'
    }
  });
  return response.json();
}